 
 
//  function sessionTracker(req, res, next) {
//     console.log('hello')
//     if(req.session) {
//         const now = Date.now()
//         const maxInactivity = 10000

//         console.log(req.session.lastActivity)
//         console.log(now)
//         console.log(now - req.session.lastActivity <  maxInactivity)
//         if(req.session.lastActivity && now - req.session.lastActivity > maxInactivity) {
//             console.log('entered inside first step')
//             req.session.destroy(err => {
//                 console.log('entered inside the destroy')
//                 if(err) {
//                     return next(err)
//                 }
//                 return res.status(401).json({message: 'Session expired. Please log in again'})
//             })
//         } else {
//             console.log('Enter inside the first else')
//             req.session.lastActivity = now
//             next()
//         }
//     } else {
//         console.log('Enter inside the outer else')
//         next()
//     }


//  }

const Timing = Date.now() + 10000


function sessionTracker(req, res, next) {
    if(Date.now() > Timing) {
        return res.json({
            message : 'Time limit is exceeded'
        })
    } else {
        next()
    }
}
 export {
    sessionTracker
 }