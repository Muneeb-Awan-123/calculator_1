import chalkAnimation from 'chalk-animation';
import showBanner from "node-banner";
function Welcome() {
    const rainbow = chalkAnimation.rainbow('Panaverse DAO'); // Animation starts
    setTimeout(() => {
        rainbow.stop(); // Animation stops
    }, 2000);
    (async () => {
        await showBanner('Usman Cal', 'CLI Calculator', 'green');
    })();
}
export default Welcome;
