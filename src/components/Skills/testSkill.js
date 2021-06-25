import React from 'react'
import { SkillsSection, SkillContainer, SkillContent, SkillName, SkillAcomplish, SkillProgrss, SkillBar, Percentage, InnerProgress } from './skillStyled'

function TestSkill({skillName,progress, widthBar, img}) {
    return (
        <>
            <SkillContent>

                        <SkillName>
                            {skillName}
                            {img}
                            <Percentage>
                                {progress}
                            </Percentage>

                        <SkillAcomplish>
                            <SkillProgrss>

                                <SkillBar>
                                    <InnerProgress style={{width: widthBar}}>

                                    </InnerProgress>

                                </SkillBar>
                                
                            </SkillProgrss>

                        </SkillAcomplish>
                        </SkillName>                        
                    </SkillContent>



                    

        </>
    )
}

export default TestSkill
