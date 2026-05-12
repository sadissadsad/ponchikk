// Sayfa açılır açılmaz videoyu kesin olarak başlatmayı dene
window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    video.play().catch(error => console.log("Otomatik video oynatma engellendi, etkileşim bekleniyor.", error));
});

document.getElementById('heartBtn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('bg-music');
    const video = document.getElementById('bg-video');
    
    // Zarfı aç
    envelope.classList.add('open');
    
    // Videonun sesini aç / oynatmayı garantile
    video.muted = false;
    video.play();
    
    // Müziği başlat
    music.play().catch(error => console.log("Müzik oynatılamadı:", error));
    
    // Kelebek uçurma fonksiyonunu tetikle
    createButterflies();
});

// Rastgele konum ve renklerde kelebek üreten fonksiyon
function createButterflies() {
    const container = document.getElementById('butterflyContainer');
    const butterflyTypes = ['🦋', '🌸', '✨', '❤️']; // İsterseniz sadece kelebek bırakabilirsiniz
    
    // Toplam 25 adet kelebek oluşturulacak
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly';
            
            // Rastgele kelebek ikonu seçimi
            butterfly.innerText = butterflyTypes[Math.floor(Math.random() * butterflyTypes.length)];
            
            // Ekranın alt kısmında rastgele yatay konumlandırma
            butterfly.style.left = Math.random() * 100 + 'vw';
            
            // Rastgele hız ve rüzgar dalgalanma efekti (--drift)
            butterfly.style.animationDuration = (Math.random() * 2 + 3) + 's';
            const driftDistance = (Math.random() * 200 - 100) + 'px';
            butterfly.style.setProperty('--drift', driftDistance);
            
            container.appendChild(butterfly);
            
            // Ekrandan çıkan kelebeği silerek tarayıcıyı yormasını engelle
            setTimeout(() => {
                butterfly.remove();
            }, 5000);
            
        }, i * 150); // Kelebeklerin peş peşe çıkması için milisaniye gecikmesi
    }
}
