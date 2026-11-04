import { useContext } from "react";
import Accordion from "../accordinan";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import RandomColor from "../random-color";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);
    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            value: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            value: <TicTacToe />,
        },
        {
            key: "showTreeReview",
            value: <TreeView />,
        },
        {
            key: "showAccordion",
            value: <Accordion />,
        },
        {
            key: "showRandomColor",
            value: <RandomColor />,
        },
    ];
    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }
    if (loading) return <h1>Loading data! Please wait</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key)? componentItem.value : null,
            )}
        </div>
    );
}
