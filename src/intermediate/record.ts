type BandMember = Record<string, { name: string, role: string }>;

const bandMembers: BandMember = {}

bandMembers['1'] = { name: 'David', role: 'Vocal 1' }
bandMembers['2'] = { name: 'Roger', role: 'Vocal 2' }

// bandMembers['3'] = { name: 'Error' } // Missing prop type 'role

type Pages = Record<'home' | 'services' | 'about' | 'contact', { id: string, title: string }>

// var pages: Pages = {
//     services : { id: '1', title: 'Test'}
// } Error: add home, about and contact as well.