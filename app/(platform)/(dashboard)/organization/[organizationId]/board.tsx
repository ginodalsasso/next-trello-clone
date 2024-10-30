import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "./form-delete";

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
            <FormDelete />
        </form>
    )
}