import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
    title: string;
    id: string;
}

export const Board = ({ title, id }: BoardProps) => {
    const deleBoardWithId = deleteBoard.bind(null, id) // bind me servira de référence pour la fonction deleteBoard
    return (
        <form action={deleBoardWithId} className="flex items-center gap-x-2">
            <p>
                Board title: { title }
            </p>
            <Button type="submit" variant="destructive" size="sm">
                Delete
            </Button>
        </form>
    )
}