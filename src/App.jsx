import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import Number from "./components/Number.jsx";
import Sign from "./components/sign.jsx";
import EqualSIgn from "./components/equalSIgn.jsx";

function App() {
    return (
        <div className={"container max-w-sm mx-auto mt-28  "}>
            <div className={"w-full rounded-lg bg-black shadow-2xl p-2 my-2 shadow-slate-950 "}>
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
                        <Button buttonLabel={"7"} className={"bg-gray-600 text-black rounded-lg px-8 py-6 hover:bg-gray-400"}/>
                        <Button buttonLabel={"8"}/>
                        <Button buttonLabel={"9"}/>
                        <Button buttonLabel={"AC"}/>
                        <Button buttonLabel={"4"}/>
                        <Button buttonLabel={"5"}/>
                        <Button buttonLabel={"6"}/>
                        <Button buttonLabel={"/"}/>
                        <Button buttonLabel={"1"}/>
                        <Button buttonLabel={"2"}/>
                        <Button buttonLabel={"3"}/>
                        <Button buttonLabel={"%"}/>
                        <Button buttonLabel={"0"}/>
                        <Button buttonLabel={"."}/>
                        <Button buttonLabel={"="}/>

                    </div>

                </div>

                </div>
            </div>
        </div>
    )
}

export default App
