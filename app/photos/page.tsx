import Image from 'next/image'

import image1 from '@/public/images/image1.jpg'
import image2 from '@/public/images/image2.jpg'
import image3 from '@/public/images/image3.jpg'
import image4 from '@/public/images/image4.jpg'

const Page = () => {
	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">My Photos</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="relative h-60 overflow-hidden">
					<Image
						fill
						src={image1}
						alt="Image 1"
						placeholder="blur"
						className="h-full w-full object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="relative h-60 overflow-hidden">
					<Image
						fill
						src={image2}
						alt="Image 2"
						placeholder="blur"
						className="h-full w-full object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="relative h-60 overflow-hidden">
					<Image
						fill
						src={image3}
						alt="Image 3"
						placeholder="blur"
						className="h-full w-full object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="relative h-60 overflow-hidden">
					<Image
						fill
						src={image4}
						alt="Image 4"
						placeholder="blur"
						className="h-full w-full object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</div>
		</div>
	)
}

export default Page
