const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra text added inside paragraph</p>
<ul>
    <li>first Item</li>
    <li>second Item</li>
    <li>third Item</li>
    <li>fourth Item</li>
</ul>
`
main.appendChild(section);