/**
 * booking controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::booking.booking', ({ strapi }) => ({
  async checkAllData(ctx) {
    try {
      const bookings = await strapi.entityService.findMany('api::booking.booking');

      const allDataOk = bookings.every(booking => booking.read === true);

      if (allDataOk) {
        return ctx.send({ message: 'All data is OK!' });
      } else {
    }
    return ctx.send({ message: 'Some data is not OK.' });
    } catch (error) {
      return ctx.badRequest('Error checking data');
    }
  },
  async readAllData(ctx) {
    try {
        const updatedCount: any = await strapi.db.query('api::booking.booking').updateMany({
          where: { read: false }, // تصفية البيانات حيث read = false
          data: { read: true }, // تحديث الحقل read إلى true
        });

        console.log(updatedCount);
        
  
        // إذا لم يتم تحديث أي سجلات
        if (updatedCount === 0) {
          return ctx.send({ message: 'No data to update.' });
        }
  
        return ctx.send({ message: `Updated ${updatedCount} records successfully!` });
      } catch (error) {
        return ctx.badRequest('Error updating data');
      }
    }
}));