# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


useEffect thì nó có 3 cách dùng, và 3 cách dùng ứng với tuỳ trường mà mình muốn

cách 1: Dùng useEffect() mà không có dependency
    useEffect(() => {
		document.title = `You clicked ${count} times`;
	})
    =>ứng với mỗi lần cpn bị re-render thì nó sẽ chạy vào useEffect trên
    =>Note: Hạn chế dùng cách này, với những trường hợp đặc biệt thì mình sẽ dùng.



cách 2: Dùng useEffect có dependency là một mảng rỗng
    useEffect(() => {
		document.title = `You clicked ${count} times`;
	},[])
    => Thì cái useEffect chỉ chạy đúng 1 lần duy nhât, và sau đó nó sẽ không
        chạy vào useEffect này nữa


        
Cách 3: Dùng useEffect có dependency là một mảng có value

    useEffect(() => {
		document.title = `You clicked ${count} times`;
	},[a,b c])   
    =>Lần đầu tiên cpn render thì nó vào 1 lần
    => nếu state a thay đổi => thì sẽ bị re-render
    => nếu state b thay đổi=> re-render
    => nếu c thay đổi => re-render

Cleanup function
    nó thường được dùng cho những async (bất đồng bộ) thì mình phải dùng
    cleanup function

    console.log(1)
    console.log(setTimeout(function(){ console.log(2)},1000))
    console.log(3)

    1 3 2



    Router ( 1 là path 2 là cpn)

    

    <Router path="/about" component={ComponentD}> =>example.com/about => ComponentD