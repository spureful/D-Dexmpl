(function dragDrop() {

	let coordX;
	let coordY;

	const dragEl = document.querySelector('.drag_el');
	const dropZone = document.querySelector('.drap-zone');
	dragEl.draggable = true;

	dragEl.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text/html', 'dragstart');
		coordX = e.offsetX;
		coordY = e.offsetY;

	});

	dropZone.addEventListener('dragover', (e) => {
		e.preventDefault();
	
	});
	
	// Дроп элемента на в определенной зоне
	dropZone.addEventListener('drop', (e) => {
			dragEl.style.position = 'absolute';
			dragEl.style.top = (e.pageY - coordY) + 'px';
			dragEl.style.left = (e.pageX - coordX) + 'px';
	});
	
// Дроп элемента на любой области документа
//		dragEl.addEventListener('dragend ', (e) => {
//		dragEl.style.position = 'absolute';
//		dragEl.style.top = (e.pageY - coordY) + 'px';
//		dragEl.style.left = (e.pageX - coordX) + 'px';

//	})

})();

//dragstart
//drag
//dragend

//---------

//dragenter
//dragleave
//dragover
//drop
