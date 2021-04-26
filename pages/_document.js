import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
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
