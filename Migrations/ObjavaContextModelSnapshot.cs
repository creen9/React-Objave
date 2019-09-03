﻿// <auto-generated />
using System;
using ASPReact.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ASPReact.Migrations
{
    [DbContext(typeof(ObjavaContext))]
    partial class ObjavaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ASPReact.Models.Objava", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Avtor")
                        .IsRequired();

                    b.Property<DateTime>("DatumNastanka");

                    b.Property<string>("Naslov")
                        .IsRequired();

                    b.Property<string>("Telo")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Objave");
                });
#pragma warning restore 612, 618
        }
    }
}
