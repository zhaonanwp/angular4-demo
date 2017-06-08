import { Component } from '@angular/core';

@Component({
    templateUrl: './table.html'
})

export class TableComponent {
    content = "Table";
    selectedData = null;
    editModel = null;
    datas = [
        {
            title: '1111',
            author: '2222',
            time: '2017/10/10'
        },
        {
            title: '1111',
            author: '2222',
            time: '2017/10/10'
        }

    ];
    showList: boolean = true;

    onSelect(item): void {
        this.selectedData = item;
    }

    editItem(item): void {
        this.showList = false;
        this.editModel = Object.assign({}, item)
    }
}