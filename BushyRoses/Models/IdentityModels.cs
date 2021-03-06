﻿using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;

namespace BushyRoses.Models {
	// You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
	public class AppUser : IdentityUser {
		public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<AppUser> manager) {
			// Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
			var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
			// Add custom user claims here
			return userIdentity;
		}

		public string Name { get; set; }
		public string Address { get; set; }
		public string PostalCode { get; set; }
		public string County { get; set; }
		public int DistrictNumber { get; set; }
		public int DeliveryOrderNumber { get; set; }
		public ICollection<Flyer> Flyers { get; set; }
	}

	public class AppDB : IdentityDbContext<AppUser> {
		public AppDB() : base("BushyRosesDB", throwIfV1Schema: false) { }

		public static AppDB Create() {
			return new AppDB();
		}

		//public DbSet<AdvertUser> AdvertUsers { get; set; }
		public DbSet<Flyer> Flyers { get; set; }
		public DbSet<Category> Categories { get; set; }
	}

	public class Flyer {
		public int ID { get; set; }
		public string Name { get; set; }
		public Category Category { get; set; }
	}

	public class Category {
		public int ID { get; set; }
		public string Name { get; set; }
		public ICollection<Flyer> Flyers { get; set; }
	}


	public class AddUserViewModel {
		public string Name { get; set; }
		public string Address { get; set; }
		public string Email { get; set; }
		public string PostalCode { get; set; }
		public string County { get; set; }
	}
}