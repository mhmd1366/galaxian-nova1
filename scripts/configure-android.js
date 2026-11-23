const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
if (fs.existsSync(manifestPath)) {
  let xml = fs.readFileSync(manifestPath, 'utf8');
  if (!xml.includes('android:screenOrientation=')) {
    xml = xml.replace(
      '<activity',
      '<activity\n            android:screenOrientation="portrait"'
    );
    fs.writeFileSync(manifestPath, xml, 'utf8');
    console.log('Portrait orientation configured in AndroidManifest.xml');
  }
}
