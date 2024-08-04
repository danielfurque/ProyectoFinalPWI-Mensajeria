Trabajo Final PWI - Front-End
Proyecto Elegido: Mensajería / Clon de WhatsApp
Librerías Utilizadas:
react-router-dom
react-icons

Dificultades:
Tuve algunas dificultades durante el desarrollo del proyecto. A continuación, se detallan los principales retos que enfrenté:

Fetch de Datos:
Inicialmente, enfrenté dificultades al realizar el fetch de los datos. reutilizaba la lógica de fetch en otros componentes, donde necesitaba el contenido de mensajes.json. Esto no cumplía con el principio DRY. Para solucionar este problema, creé un hook que puedo reutilizar siempre que lo necesite.

Estilos Responsivos:
Tuve problemas con los estilos, especialmente cuando cambiaba la resolución del navegador o visualizaba la página en un dispositivo móvil. Me llevó mucho tiempo corregir algunos comportamientos inesperados relacionados con el diseño responsivo.

Uso de LocalStorage:
No logré implementar el uso de LocalStorage para guardar los mensajes que envío. Encontré dificultades para integrarlo de manera efectiva en la aplicación.