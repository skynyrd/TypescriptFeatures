type BandMember = Record<string, { name: string, role: string };

const bandMembers: BandMember = {}

bandMembers['1'] = { name: 'David', role: 'Vocal 1' }
bandMembers['2'] = { name: 'Roger', role: 'Vocal 2' }

// bandMembers['3'] = { name: 'Error' } // Missing prop type 'role