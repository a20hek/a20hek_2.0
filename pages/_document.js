import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<script async src='https://www.googletagmanager.com/gtag/js?id=G-QDHYX971DQ' />
					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', 'G-QDHYX971DQ');`,
						}}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(h,o,t,j,a,r){
							h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
							h._hjSettings={hjid:2291642,hjsv:6};
							a=o.getElementsByTagName('head')[0];
							r=o.createElement('script');r.async=1;
							r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
							a.appendChild(r);
						})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
						}}
					/>

					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Work+Sans:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}
