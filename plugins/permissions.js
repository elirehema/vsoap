export default ({ app, store }, inject) => {
    inject('rules', {
      hasPermission (s) {
        if(s){
        var p = s.split(',');
        if(store.getters.userpermissions){
         const found = p.some(r => store.getters.userpermissions.includes(r))
       
        return found
        }
    
        return false
    }
    return true
      },
      hasRole (r) {
        if(store.getters.userrole){
            return this.store.userrole === r
        }
        return false
      }
    })
  }