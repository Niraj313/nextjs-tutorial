import { Card } from "@/components/card";
import Link from "next/link";
export default function ArchivedNotification() {
    return (
        <Card>
            <div>
                Archived Notifiaction
            </div>
            <div>
                <Link href='/complex-dashboard'>Default
                </Link>
            </div>
        </Card>
    )
}