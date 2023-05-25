import Display from "./components/Display.jsx";
import {Button} from "./components/Button.jsx";
import {CalculatorProvider} from "./contexts/calculator.jsx";

function App() {
    return (
        <div className={"container max-w-sm mx-auto mt-28  "}>
            <div className={"w-full rounded-lg bg-black shadow-2xl p-2 my-2 shadow-slate-950 "}>
                <CalculatorProvider>
                <Display/>
                <div className={" m-2"}>
                <div className={"grid grid-cols-4 gap-2 mt-3"}>
                    <Button buttonLabel={"÷"}/>
                    <Button buttonLabel={"x"}/>
                    <Button buttonLabel={"-"}/>
                    <Button buttonLabel={"+"}/>
                </div>
                <div className={"grid grid-cols-4 grid-flow-col gap-2 mt-2"}>
                    <div className={"w-full grid grid-cols-4 col-span-4 text-bold text-center mt-1 gap-2 "}>
                        <Button buttonLabel={"7"} style={"gray"}/>
                        <Button buttonLabel={"8"} style={"gray"}/>
                        <Button buttonLabel={"9"} style={"gray"}/>
                        <Button buttonLabel={"AC"} style={"orange"}/>
                        <Button buttonLabel={"4"} style={"gray"}/>
                        <Button buttonLabel={"5"} style={"gray"}/>
                        <Button buttonLabel={"6"} style={"gray"}/>
                        <Button buttonLabel={"/"} style={"orange"}/>
                        <Button buttonLabel={"1"} style={"gray"}/>
                        <Button buttonLabel={"2"} style={"gray"}/>
                        <Button buttonLabel={"3"} style={"gray"}/>
                        <Button buttonLabel={"%"} style={"orange"}/>
                        <Button buttonLabel={"0"} style={"gray"}/>
                        <Button buttonLabel={"."} style={"gray"}/>
                        <Button buttonLabel={"="} className={"col-span-2"} style={"orange"}/>

                    </div>

                </div>

                </div>
                </CalculatorProvider>
            </div>
        </div>
    )
}

export default App
