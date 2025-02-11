import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"

const StoreItem: FC<{ price: number; slug: string; title: string; thumbs: string[] }> = ({ price, slug, title, thumbs }) => {
	return (
		<div className="w-[200px] group">
			<Link href={`/store/${slug}`}>
				<Image src={`/store/${slug}/${thumbs[0]}`} width={200} height={200} alt={title} className="border border-2 border-gray-300 group-hover:border-oaccent-900 mb-1 rounded-xl" />
			</Link>
			<div className="flex pt-1">
				<Link href={`/store/${slug}`} className="font-bold group-hover:underline">{title}</Link>
				<p className="ms-auto ps-4 font-bold text-oblue-600 dark:text-oaccent-700">${price}</p>
			</div>
		</div>
	)
}

export default StoreItem