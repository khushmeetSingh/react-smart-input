import FormattedInput from "@/components/react-formatted-input";
import React from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-item: center;
    font-size: 100px;
    background-color: #808080;
`;
const StyledInput = styled.input`
    background-color: #fff;
    height: 50px;
    font-size: 48px;
`;

const App = function () {
    return <>
        <StyledDiv>
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={18}
            defaultValue="" 
            placeholderText="(##)###-#####-##" 
            formatTemplate="(##)###-#####-##" 
            CustomInput={StyledInput} 
            />
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={18}
            defaultValue="" 
            placeholderText="#####-#####-#####" 
            formatTemplate="#####-#####-#####"
            CustomInput={StyledInput} 
            />
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={18}
            defaultValue="" 
            placeholderText="(###) ###-####" 
            formatTemplate="(###) ###-####" 
            CustomInput={StyledInput} 
            />
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={20}
            defaultValue="" 
            placeholderText="#####-#####-#####-##" 
            formatTemplate="#####-#####-#####-##" 
            CustomInput={StyledInput} 
            />
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={18}
            defaultValue="" 
            placeholderText="####/##/##" 
            formatTemplate="####/##/##" 
            CustomInput={StyledInput} 
            />
            <FormattedInput 
            id="h" 
            name="f" 
            maxLength={18}
            defaultValue="" 
            placeholderText="### ###" 
            formatTemplate="### ###" 
            CustomInput={StyledInput} 
            />
        </StyledDiv>
    </>;
}

export default App;