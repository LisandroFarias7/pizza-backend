/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
    create(@Body() createMenuDto: CreateMenuDto) {
    // Utiliza el ValidationPipe para aplicar las validaciones
    const menu = this.menuService.create(createMenuDto);
    return menu;
  }

  @Get()
  async getAll() {
    const menus = await this.menuService.getAll();
    return menus;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const menu = await this.menuService.getOne(id);
    if (!menu) {
      throw new HttpException('Menú no encontrado', HttpStatus.NOT_FOUND);
    }
    return menu;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedMenu = await this.menuService.remove(id);
    if (!deletedMenu) {
      throw new HttpException('Menú no encontrado', HttpStatus.NOT_FOUND);
    }
    return deletedMenu;
  }
}
