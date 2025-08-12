## 🎯 Descripción del proyecto  
Este código implementa un **mini proyecto del “Amigo Secreto”** utilizando JavaScript.
Su objetivo es permitir que el usuario:  
1. Ingrese nombres de amigos a través de un campo de texto.  
2. Visualice la lista de amigos agregados en tiempo real.  
3. Realice un sorteo aleatorio para elegir a un “amigo secreto”.  

---

## ⚙️ Funcionamiento  
- **Almacenamiento de datos**  
  - Se utiliza un array `nombresAmigos` para guardar los nombres ingresados.  

- **Agregar amigos (`agregarAmigos()`)**  
  - Obtiene el valor del input con `id="amigo"`.  
  - Si no está vacío, lo agrega al array y actualiza la lista mostrada en pantalla.  
  - Si el campo está vacío, muestra un mensaje de alerta pidiendo un nombre válido.  

- **Mostrar amigos (`mostrarAmigos()`)**  
  - Limpia la lista actual (`innerHTML = ""`).  
  - Recorre el array y crea un elemento `<li>` por cada amigo, agregándolo a la lista (`id="listaAmigos"`).  

- **Limpiar campo (`limpiarCampo()`)**  
  - Deja en blanco el campo de entrada después de agregar un nombre.  

- **Sorteo aleatorio (`sortearAmigos()`)**  
  - Si hay menos de 3 amigos cargados, muestra una alerta pidiendo más nombres.  
  - Si hay 3 o más, selecciona uno al azar usando `Math.floor(Math.random() * nombresAmigos.length)` y lo muestra en el elemento con `id="resultado"`.  

---

## 📌 Ejemplo de uso  
1. Escribir un nombre en el campo de texto y presionar el botón **"Agregar"**.  
2. Repetir el paso anterior para agregar varios nombres.  
3. Ver en pantalla la lista de todos los amigos ingresados.  
4. Presionar **"Sortear"** para elegir un amigo secreto aleatoriamente.  

---

## 💻 Tecnologías utilizadas  
- HTML5  
- CSS3 
- JavaScript

---

 
