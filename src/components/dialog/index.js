import { Controller } from "@hotwired/stimulus"
import { closeDialog, showDialog } from "winduum/src/components/dialog/index.js";

export default class Dialog extends Controller {
    async show ({ params }) {
        await showDialog(document.getElementById(params.target), params)
    }

    async close ({ currentTarget, params }) {
        await closeDialog(document.getElementById(params?.target) ?? currentTarget.closest('dialog'), params)
    }
}
