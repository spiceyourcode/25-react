import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";

export default function FeatureFlags() {
    return <div>
        <h1>Feature Flags</h1>
    </div>

    const componentsToRender = [
        {
            key: 'ShowLightAndDarkMode',
            value: <LightDarkMode />
        },
        {
            key: 'ShowTicTacToeBoard',
            value: <TicTacToe/>
        },
        {
            key: 'ShowR',
            value: <LightDarkMode />
        },
        {
            key: 'ShowLightAndDarkMode',
            value: <LightDarkMode />
        },

    ];
}