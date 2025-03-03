const  butoonColor1 = document.getElementById("color-button");
const changeBg = () => {
    const haxVal = Math.floor(Math.random() * 0xffffff).
    toString(16);
    document.body.style.background = `#${haxVal}`;
};
butoonColor1.addEventListener("click", changeBg);