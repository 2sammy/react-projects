import { useState } from "react";

export default function Ternary(){
    const [display, setDisplay] = useState(true);

    return display ? (
    <div>
<h2> this is a Component</h2>
</div>
    ): (
        <div>
        <h2> nothing to show </h2>
        </div>
    );
}