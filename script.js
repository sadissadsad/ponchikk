document.getElementById('heartBtn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('bg-music');
    const video = document.getElementById('bg-video');
    
    // Zarf açılma animasyonunu başlat
    envelope.classList.add('open');
    
    // Arka plan videosunu görünür yap ve oynat
    document.body.classList.add('video-aktif');
    video.muted = false; // iPhone kısıtlamasını kaldırmak için sesi açıyoruz
    video.play().catch(error => console.log("Video oynatılamadı:", error));
    
    // Arka plan müziğini başlat
    music.play().catch(error => console.log("Müzik oynatılamadı:", error));
});
