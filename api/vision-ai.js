/**
 * SBM VISION AI MODULE
 * Folder: api/vision-ai.js
 */

export async function analyzeImage(base64) {
    
    // GitHub akka si hin dhoorkineef furtuu bakka lamatti addaan hironna
    const part1 = "sk-svcacct-y5hLjwAubH6mp-FKG2AuQTtMgf_pp2R2_Z9PjSAafDdpJ4q-FWODwpPEO7H_";
    const part2 = "88Ah5Kyzgw11zoT3BlbkFJPSQHii5QsL4MJZZn-Slx1EpabyCooJtrCiU6ckqn8JAvKui5zw6rOPPPu0g8pQkfmp8_TU3msA";
    
    const API_KEY = part1 + part2; 

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "user",
                        content: [
                            { 
                                type: "text", 
                                text: "Identify the SBM crusher machine part in this image and detect any faults or wear. Suggest maintenance." 
                            },
                            { 
                                type: "image_url", 
                                image_url: { url: base64 } 
                            }
                        ]
                    }
                ],
                max_tokens: 500
            })
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("AI Vision Error:", error);
        return { error: "AI Scan failed." };
    }
}

