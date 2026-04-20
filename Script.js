document.getElementById('artistForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const platform = document.getElementById('platform').value;
    const link = document.getElementById('link').value;

    const artistGrid = document.getElementById('artistGrid');
    const card = document.createElement('div');
    card.className = 'artist-card';
    
    card.innerHTML = `
        <h3>${name}</h3>
        <p>📍 ${country}</p>
        <p>📱 <strong>${platform}</strong></p>
        <a href="${link}" target="_blank" style="color: #f39c12;">View Content →</a>
    `;

    artistGrid.prepend(card);
    this.reset();
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
