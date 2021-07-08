document.addEventListener("DOMContentLoaded", () => {
    const back = async () => {
    async function navigateBack() {
        const view = await fin.View.wrap({ uuid: "platform_customization_local", name:"test-view" })
        console.log(view)
        await view.navigateBack();
        
    }
    navigateBack().then(() => console.log('Navigated back')).catch(err => console.log(err));
    
}
document.getElementById("back").addEventListener("click", back)})

document.addEventListener("DOMContentLoaded", () => {
    const forward = async () => {
        async function navigateForward() {
        const view = await fin.View.wrap({ uuid: "platform_customization_local", name:"test-view" })
        await view.navigateForward();
        
    }
    navigateForward().then(() => console.log('Navigated forward')).catch(err => console.log(err));
    
}
document.getElementById("forward").addEventListener("click", forward)})




