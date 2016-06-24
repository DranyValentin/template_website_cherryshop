(() =>
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("It's ok!!!")

	const $ = selector => document.querySelector(selector)
	let $body = $('body')

	// Box Lang
	let $menuLang = $('.menu_Lang')
	let $ulLang = $menuLang.querySelector('ul')

	$menuLang.addEventListener('click', () =>
	{
		if ( $ulLang.style.display == 'block' ) return

		if ( $ulCurrency.style.display == 'block' )
			$ulCurrency.style.display = 'none'

		$ulLang.style.display = 'block'

		event.stopPropagation()
	})

	//Box Currency
	let $menuCurrency = $('.menu_Currency')
	let $ulCurrency = $menuCurrency.querySelector('ul')

	$menuCurrency.addEventListener('click', () =>
	{
		if ( $ulCurrency.style.display == 'block' ) return

		if ( $ulLang.style.display == 'block' )
			$ulLang.style.display = 'none'

		$ulCurrency.style.display = 'block'

		event.stopPropagation()
	})

	let $lis = document.querySelectorAll('li')

	for (let $li of $lis)
	{
		$li.addEventListener('click', () => 
		{
			if ( event.currentTarget.parentNode.className) return
						
			let {target} = event
			let text = document.createTextNode(target.textContent)
			let menu = target.parentNode.parentNode

			if ( menu.firstChild.TEXT_NODE == 3 ) {
				console.log(3)
				menu.removeChild(menu.firstChild)
			}

			menu.insertBefore(text, menu.firstChild)
		})
	}


	$body.addEventListener('click', () =>
	{
		if ( $ulLang.style.display == 'block' )
			$ulLang.style.display = 'none'

		if ( $ulCurrency.style.display == 'block' )
			$ulCurrency.style.display = 'none'
	})
})()