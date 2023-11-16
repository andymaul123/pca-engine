export const decisions = {
    leaveShrine: {
        decisionText: "Do you wish to exit?",
        buttons: [
            {
                buttonText: "Yes",
                triggerScript: "scenes/tunnel",
                triggerTarget: "#main-scene",
            },
            {
                buttonText: "No",
                triggerScript: null,
                triggerTarget: null,
            }
        ]
    }
}