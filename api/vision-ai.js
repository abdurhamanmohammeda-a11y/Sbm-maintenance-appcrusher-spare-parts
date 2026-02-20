/**
 * SBM VISION AI MODULE
 * Folder: api/vision-ai.js
 */

export async function analyzeImage(base64) {
    
    // Furtuu kee isa ati amma uumte asitti galchineerra
    const API_KEY=


    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Modeelii suuraa qulqulleessee dubbisu
                messages: [
                    {
                        role: "user",
                        content: [
                            { 
                                type: "text", 
                                text: "Identify the SBM crusher machine part in this image. Detect wear, cracks, or technical faults. Provide a brief maintenance suggestion in English." 
                            },
                            { 
                                type: "image_url", 
                                image_url: { 
                                    url: base64 
                                } 
                            }
                        ]
                    }
                ],
                max_tokens: 500
            })
        });

        const data = await response.json();
        
        // Gabaasa AI irraa dhufe qofa adda baasanii deebisuu
        if (data.choices && data.choices[0]) {
            return data;
        } else {
            console.error("AI Error Response:", data);
            return { error: "AI could not process the image." };
        }

    } catch (error) {
        console.error("Network Error:", error);
        return { error: "Connection failed. Please check your internet." };
    }
}
