import Link from "next/link"
import { EmailIcon, WhatsAppIcon } from "./Icons"
import InfoBox from "./InfoBox"
import Layout from "./Layout"

const Footer = () => {
    return (
        <div
            className="w-full border-t-2 border-solid border-[#e6e6e6] font-medium text-lg"
        >
            <Layout className='py-4 flex items-center justify-between'>

                <Link href={'mailto:aliafarinifard@outlook.com'}>
                    <InfoBox icon={<EmailIcon className='w-7 h-7' />} title="Email" text="aliafarinifard@outlook.com" />
                </Link>

                <Link href={'tel:0098-993-149-8394'}>
                    <InfoBox icon={<WhatsAppIcon className='w-8 h-8' />} title="Whatsapp | Telegram" text="0098-993-149-8394" />
                </Link>

                <p className="font-medium">
                    Ali Afarinifard | <span className="font-bold">Front End</span> Developer
                </p>

            </Layout>
        </div>
    )
}

export default Footer