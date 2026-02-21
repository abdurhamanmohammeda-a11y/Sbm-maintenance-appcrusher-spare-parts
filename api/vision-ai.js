/**
 * SBM VISION AI - SIMULATION MODE
 * Kaffaltii malee akka hojjetuuf kan qindaa'e
 */

export async function analyzeImage(base64) {
    console.log("Simulation mode: Analyzing machine image...");

    // Daqiiqaa 2 eegsisna akka waan AI-n yaadaa jirutti
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Gabaasa sobaa (Simulated Report) kan maashinii SBM irratti xiyyeeffatu
    const simulatedResponse = {
        choices: [{
            message: {
                content: `🔍 [SBM AI ANALYSIS REPORT]
-------------------------------------------
PART IDENTIFIED: SBM Jaw Crusher Plate (Swing Jaw).
CONDITION: Heavy abrasive wear detected on the tooth profile.
FAULT LEVEL: Critical (75% worn).
RECOMMENDATION: 
1. Rotate the jaw plate if not done before.
2. If both sides are worn, replace with a new Mn18Cr2 Manganese liner.
3. Check wedge bolts for tightness.

Next inspection suggested in 48 working hours.`
            }
        }]
    };

    return simulatedResponse;
}
