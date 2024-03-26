const button = document.querySelector('button')
const input = document.querySelector('input')
const output = document.querySelector('output')


button.addEventListener('click',()=> {
    //console.log('test')
    //alert('test')
    const Age = input.value
    const lowerlimits = (220 - Age) * 0.65 
    const upperlimits = (220 - Age) * 0.85
    output.innerHTML = lowerlimits.toFixed(0) + "-" +  upperlimits.toFixed(0)

})