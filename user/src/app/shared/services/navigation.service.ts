import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {   
            name: 'หน้าหลัก',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Home1',
            sub: [
                { icon: 'i-Play-Music', name: 'HOME', state: '/dashboard/default', type: 'link' }
            ]
        },
        {
            name: 'ข้อมูลผู้ใช้งาน',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Administrator',
            sub: [
                { icon: 'i-Business-ManWoman', name: 'ผู้ใช้', state: '/users/creator&fundraiser', type: 'link' },
                { icon: 'i-Add-User', name: 'เพิ่มผู้ใช้', state: '/users/create', type: 'link' },
                // { icon: 'i-Checked-User', name: 'ยืนยันตัวตน', state: '/users/verification', type: 'link' },
            ]
        },
        {
            name: 'ภาพยนตร์',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Film',
            sub: [
                { icon: 'i-Video-4', name: 'ภาพยนตร์', state: '/movies', type: 'link' },
                {
                    icon: 'i-Video-5',
                    name: 'เพิ่มข้อมูล',
                    type: 'dropDown',
                    sub: [
                        { name: 'เพิ่มภาพยนตร์', state: '/movies/movie-add', type: 'link' },
                        { name: 'เพิ่มประเภทภาพยนตร์', state: '/movies/movie-category', type: 'link' },
                        { name: 'เพิ่มประข้อมูลธนาคาร', state: '/movies/bank-add', type: 'link' }
                    ]
                },
            ]
        },
        {
            name: 'บัญชีผู้ใช้',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Gear',
            sub: [
                { icon: 'i-Lock-User', name: 'จัดการบัญชีผู้ใช้', state: '/admin/account', type: 'link' },
                { icon: 'i-Administrator', name: 'ข้อมูลผู้ดูแลระบบ', state: '/admin/admin-list', type: 'link' },
                { icon: 'i-Money-2', name: 'การส่งเงิน', state: '/admin/sendmoney-add', type: 'link' },
                { icon: 'i-Letter-Open', name: 'ดูข้อมูลการส่งเงิน', state: '/admin/sendmoney-view', type: 'link' },
                { icon: 'i-Letter-Open', name: 'ข้อมูลการโอนเงิน', state: '/movies/transfer-view', type: 'link' },
            ]
        },
        // {
        //     name: 'Doc',
        //     type: 'extLink',
        //     tooltip: 'Documentation',
        //     icon: 'i-Safe-Box1',
        //     state: 'http://demos.ui-lib.com/gull-doc'
        // }
    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
