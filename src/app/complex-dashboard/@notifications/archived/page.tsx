import Card from "@/components/Card";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <Card>
      <div>Notification</div>
      <br/>
      <Link href="/complex-dashboard">Active</Link>
    </Card>
  );
}
