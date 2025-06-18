## What are Pipes?
- A thing we can add in your template to transform the way data is displayed on the screen.  

## Custom pipe
export class TemperaturePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        //value: any: the value which the pipe is used
        //...args: any[]: the configuration values for the pipe
    }   // this is a method must exist for that pipe to work
}

## Reference vs Primitive Values
[text](https://academind.com/tutorials/reference-vs-primitive-values)