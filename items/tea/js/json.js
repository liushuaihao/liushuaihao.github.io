const tea_name=['全部','绿茶', '黄茶', '乌龙茶', '红茶', '黑茶', '白茶', '花茶'];
const tea_info= [{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '茉莉花茶',
		price: '￥223.0',
		type: '花茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '白牡丹',
		price: '￥1235.0',
		type: '白茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '白毫银针',
		price: '￥258.0',
		type: '白茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '云南普洱茶',
		price: '￥500.0',
		type: '黑茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '湖北老青茶',
		price: '￥400.0',
		type: '黑茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '霍山黄芽蒙洱银针',
		price: '￥711.0',
		type: '黄茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '蒙顶黄芽',
		price: '￥450.0',
		type: '黄茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '冻顶乌龙茶',
		price: '￥620.0',
		type: '乌龙茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '大红袍',
		price: '￥3480.0',
		type: '乌龙茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '祁门红茶',
		price: '￥468.0',
		type: '红茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '正山小种',
		price: '￥952.0',
		type: '红茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '西湖龙井特级',
		price: '￥888.0',
		type: '绿茶'
	},
	{
		img_url: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
		name: '洞庭碧螺春',
		price: '￥880.0',
		type: '绿茶'
	}
]
