// Espera a que se complete la transición de vista antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
	// Tu código para actualizar el enlace del menú
	const navLinks = document.querySelectorAll('[data-nav-link]')

	navLinks.forEach((link) => {
		const linkPaths = link.getAttribute('href')?.split('/')
		const localPaths = window.location.href.split('/')

		const linkHref = linkPaths?.[linkPaths.length - 1]
		const currentPath = localPaths[localPaths.length - 1]

		if (linkHref === currentPath) {
			link.classList.add('active')
		}
	})
})