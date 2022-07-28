# QUESTIONS:

1. This worked:

> function createRows() {
>   for (let i = 0; i < DEFAULT_SIZE; i++) {
>     const row = document.createElement('div');
>     row.classList.add('row');
>     row.setAttribute('id', `row-${i+1}`)
>     drawSpace.appendChild(row);
>   }
> }

but this didn't:
>     const row = document.createElement('div');
>     row.classList.add('row');

>  // function createRows() {
>  //   for (let i = 0; i < DEFAULT_SIZE; i++) {
>  //     drawSpace.appendChild(row);
>  //     currentRow.setAttribute('id', `row-${i+1}`);
>  //   }
>  // }

why does the constant have to be declared INSIDE the function? 