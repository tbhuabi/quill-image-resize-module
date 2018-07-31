var quill = new Quill('#editor', {
	theme: 'snow',
	modules: {
		toolbar: [
			['bold', 'italic', 'underline', 'strike',
				{
					'script': 'sub',
				}, {
					'script': 'super',
				},
				{
					'color': [],
				}, {
					'background': [],
				}, 'code',
			],
			[{
				'font': [],
			}, {
				'size': ['small', false, 'large', 'huge'],
			}],

			['link', 'image', 'video', 'formula'],
			['blockquote', 'code-block', {
				'header': 1,
			},
				{
					'list': 'ordered',
				}, {
					'list': 'bullet',
				},
			],
			[{
				'indent': '-1',
			}, {
				'indent': '+1',
			}, {
				'direction': 'rtl',
			}, {
				'align': [],
			}],
			['clean'],
		],
		imageResize: {},
	},
});

function convert() {
	console.log(quill.getContents());
}
