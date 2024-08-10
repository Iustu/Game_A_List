### Instalation

`1-` Clone the project to your PC <br>
`2-` Access the project folder and run `npm install` <br>
`3-` If the console shows an error about ngx-mask or validation-messages run `npm install --force ` or ` npm install --legacy-peer-deps`

### Local Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. <br>
The application will automatically reload if you change any of the source files.

### Important Libs used

- UI Library: https://material.angular.io/
- CSS/SCSS: https://tailwindcss.com/
- Form validations: https://www.npmjs.com/package/@house-of-angular/validation-messages/v/15.0.8
- Input Mask: https://github.com/JsDaddy/ngx-mask (learn more here: https://www.youtube.com/watch?v=53S4LlPLwrI)

### Angular Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Instalação


```bash
  npm install -g @angular/cli

  npm install
  
  ng serve
```
## Pacotes

### Pacote Core

O Objetivo desse pacote é armazenar apenas recursos que precisam ser carregados ao iniciar a primeira página da aplicação. Se um Service não é chamado na primeira página da aplicação, o lugar dele não é aqui!


### Pacote Modules

O local aonde esta os módulos da sua aplicação.


### Pacote Shared

Aqui é aonde estará os recursos que serão compartilhados entre os módulos. 
