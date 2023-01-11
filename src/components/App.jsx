import { useState } from "react";
import { GeneralWrapper } from "./App.styled";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const options = [`good`, `neutral`, `bad`]
    const totalFeedback = good + neutral + bad
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100)

    const updateFeedback = (button) => {
        switch (button) {
            case `good`:
                setGood(pS => pS + 1)
                break
            case `neutral`:
                setNeutral(pS => pS + 1)
                break
            case `bad`:
                setBad(pS => pS + 1)
                break
            default:
                console.log(`Error in type ${button}`)
        }
    }

        return (
            <GeneralWrapper>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={updateFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {good || neutral || bad ? 
                        <Statistics 
                            good={good} 
                            neutral={neutral} 
                            bad={bad} 
                            total={totalFeedback} 
                            positivePercentage={positiveFeedbackPercentage}
                        />
                        : <Notification message="There is no feedback " />}
                </Section>
            </GeneralWrapper>
        )
}
