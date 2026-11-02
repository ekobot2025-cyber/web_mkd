<?php
/**
 * Backend API Berita & Upload Gambar untuk Magister Keuangan Daerah (MKD) UNCEN
 * Digunakan untuk persistensi data pada hosting cPanel (PHP 7.4 - 8.3+)
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/news.json';
$uploadDir = dirname(__DIR__) . '/uploads/photos';

// Buat direktori data jika belum ada
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// Buat direktori upload jika belum ada
if (!is_dir($uploadDir)) {
    @mkdir($uploadDir, 0755, true);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit();
}

if ($method === 'POST') {
    // 1. Cek apakah ada upload file gambar multipart/form-data
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['photo'];
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
        
        if (!in_array($ext, $allowed)) {
            echo json_encode(['success' => false, 'message' => 'Format file tidak diizinkan. Gunakan JPG, PNG, atau WEBP.']);
            exit();
        }

        $filename = time() . '_' . substr(md5(uniqid()), 0, 8) . '.' . $ext;
        $targetPath = $uploadDir . '/' . $filename;

        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            echo json_encode([
                'success' => true,
                'url' => '/uploads/photos/' . $filename,
                'filename' => $filename
            ]);
            exit();
        } else {
            echo json_encode(['success' => false, 'message' => 'Gagal memindahkan file upload ke server.']);
            exit();
        }
    }

    // 2. Baca payload JSON untuk aksi simpan / sync data berita
    $rawInput = file_get_contents('php://input');
    $payload = json_decode($rawInput, true);

    if ($payload && isset($payload['news'])) {
        $jsonData = json_encode($payload['news'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $written = file_put_contents($dataFile, $jsonData);

        if ($written !== false) {
            echo json_encode(['success' => true, 'message' => 'Data berita berhasil diperbarui di server.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Gagal menulis file database news.json. Periksa izin folder cPanel.']);
        }
        exit();
    }

    echo json_encode(['success' => false, 'message' => 'Payload tidak valid.']);
    exit();
}
